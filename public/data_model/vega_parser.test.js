/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { cloneDeep } from 'lodash';
import { TransformParser } from './Transform_parser';
import { bypassExternalUrlCheck } from '../Transform_view/Transform_base_view';

jest.mock('../services');

jest.mock('../lib/Transform', () => ({
  Transform: jest.requireActual('Transform'),
  TransformLite: jest.requireActual('Transform-lite'),
}));

describe(`TransformParser._setDefaultValue`, () => {
  function check(spec, expected, ...params) {
    return () => {
      const vp = new TransformParser(spec);
      vp._setDefaultValue(...params);
      expect(vp.spec).toEqual(expected);
      expect(vp.warnings).toHaveLength(0);
    };
  }

  test(`empty`, check({}, { config: { test: 42 } }, 42, 'config', 'test'));
  test(`exists`, check({ config: { test: 42 } }, { config: { test: 42 } }, 1, 'config', 'test'));
  test(`exists non-obj`, check({ config: false }, { config: false }, 42, 'config', 'test'));
});

describe(`TransformParser._setDefaultColors`, () => {
  function check(spec, isTransformLite, expected) {
    return () => {
      const vp = new TransformParser(spec);
      vp.isTransformLite = isTransformLite;
      vp._setDefaultColors();
      expect(vp.spec).toEqual(expected);
      expect(vp.warnings).toHaveLength(0);
    };
  }

  test(
    `Transformlite`,
    check({}, true, {
      config: {
        range: { category: { scheme: 'elastic' } },
        mark: { color: '#54B399' },
      },
    })
  );

  test(
    `Transform`,
    check({}, false, {
      config: {
        range: { category: { scheme: 'elastic' } },
        arc: { fill: '#54B399' },
        area: { fill: '#54B399' },
        line: { stroke: '#54B399' },
        path: { stroke: '#54B399' },
        rect: { fill: '#54B399' },
        rule: { stroke: '#54B399' },
        shape: { stroke: '#54B399' },
        symbol: { fill: '#54B399' },
        trail: { fill: '#54B399' },
      },
    })
  );
});

describe('TransformParser._resolveEsQueries', () => {
  let searchApiStub;
  const data = [
    {
      id: 0,
      rawResponse: [42],
    },
  ];

  beforeEach(() => {
    searchApiStub = {
      search: jest.fn(() => ({
        toPromise: jest.fn(() => Promise.resolve(data)),
      })),
    };
  });

  function check(spec, expected, warnCount) {
    return async () => {
      const vp = new TransformParser(spec, searchApiStub, 0, 0, {
        getFileLayers: async () => [{ name: 'file1', url: 'url1' }],
        getUrlForRegionLayer: async (layer) => {
          return layer.url;
        },
      });
      await vp._resolveDataUrls();

      expect(vp.spec).toEqual(expected);
      expect(vp.warnings).toHaveLength(warnCount || 0);
    };
  }

  test('no data', check({}, {}));
  test('no data2', check({ a: 1 }, { a: 1 }));
  test('non-es data', check({ data: { a: 10 } }, { data: { a: 10 } }));
  test('es', check({ data: { url: { index: 'a' }, x: 1 } }, { data: { values: [42], x: 1 } }));
  test(
    'es 2',
    check({ data: { url: { '%type%': 'elasticsearch', index: 'a' } } }, { data: { values: [42] } })
  );
  test(
    'es arr',
    check(
      { arr: [{ data: { url: { index: 'a' }, x: 1 } }] },
      { arr: [{ data: { values: [42], x: 1 } }] }
    )
  );
  test(
    'emsfile',
    check(
      { data: { url: { '%type%': 'emsfile', name: 'file1' } } },
      { data: { url: bypassExternalUrlCheck('url1') } }
    )
  );
});

describe('TransformParser._parseSchema', () => {
  function check(schema, isTransformLite, warningCount) {
    return () => {
      const vp = new TransformParser({ $schema: schema });
      expect(vp._parseSchema()).toBe(isTransformLite);
      expect(vp.spec).toEqual({ $schema: schema });
      expect(vp.warnings).toHaveLength(warningCount);
    };
  }

  test('should warn on no Transform version specified', () => {
    const vp = new TransformParser({});
    expect(vp._parseSchema()).toBe(false);
    expect(vp.spec).toEqual({ $schema: 'https://Transform.github.io/schema/Transform/v5.json' });
    expect(vp.warnings).toHaveLength(1);
  });

  test(
    'should not warn on current Transform version',
    check('https://Transform.github.io/schema/Transform/v5.json', false, 0)
  );
  test(
    'should not warn on older Transform version',
    check('https://Transform.github.io/schema/Transform/v4.json', false, 0)
  );
  test(
    'should warn on Transform version too new to be supported',
    check('https://Transform.github.io/schema/Transform/v5.99.json', false, 1)
  );

  test(
    'should not warn on current Transform-lite version',
    check('https://Transform.github.io/schema/Transform-lite/v4.json', true, 0)
  );
  test(
    'should warn on Transform-lite version too new to be supported',
    check('https://Transform.github.io/schema/Transform-lite/v5.json', true, 1)
  );
});

describe('TransformParser._parseTooltips', () => {
  function check(tooltips, position, padding, centerOnMark) {
    return () => {
      const vp = new TransformParser(tooltips !== undefined ? { config: { kibana: { tooltips } } } : {});
      vp._config = vp._parseConfig();
      if (position === undefined) {
        // error
        expect(() => vp._parseTooltips()).toThrow();
      } else if (position === false) {
        expect(vp._parseTooltips()).toEqual(false);
      } else {
        expect(vp._parseTooltips()).toEqual({ position, padding, centerOnMark });
      }
    };
  }

  test('undefined', check(undefined, 'top', 16, 50));
  test('{}', check({}, 'top', 16, 50));
  test('left', check({ position: 'left' }, 'left', 16, 50));
  test('padding', check({ position: 'bottom', padding: 60 }, 'bottom', 60, 50));
  test('padding2', check({ padding: 70 }, 'top', 70, 50));
  test('centerOnMark', check({}, 'top', 16, 50));
  test('centerOnMark=10', check({ centerOnMark: 10 }, 'top', 16, 10));
  test('centerOnMark=true', check({ centerOnMark: true }, 'top', 16, Number.MAX_VALUE));
  test('centerOnMark=false', check({ centerOnMark: false }, 'top', 16, -1));

  test('false', check(false, false));

  test('err1', check(true, undefined));
  test('err2', check({ position: 'foo' }, undefined));
  test('err3', check({ padding: 'foo' }, undefined));
  test('err4', check({ centerOnMark: {} }, undefined));
});

describe('TransformParser._parseMapConfig', () => {
  function check(config, expected, warnCount) {
    return () => {
      const vp = new TransformParser();
      vp._config = config;
      expect(vp._parseMapConfig()).toEqual(expected);
      expect(vp.warnings).toHaveLength(warnCount);
    };
  }

  test(
    'empty',
    check(
      {},
      {
        delayRepaint: true,
        latitude: 0,
        longitude: 0,
        mapStyle: 'default',
        zoomControl: true,
        scrollWheelZoom: false,
      },
      0
    )
  );

  test(
    'filled',
    check(
      {
        delayRepaint: true,
        latitude: 0,
        longitude: 0,
        mapStyle: 'default',
        zoomControl: true,
        scrollWheelZoom: false,
        maxBounds: [1, 2, 3, 4],
      },
      {
        delayRepaint: true,
        latitude: 0,
        longitude: 0,
        mapStyle: 'default',
        zoomControl: true,
        scrollWheelZoom: false,
        maxBounds: [1, 2, 3, 4],
      },
      0
    )
  );

  test(
    'warnings',
    check(
      {
        delayRepaint: true,
        latitude: 0,
        longitude: 0,
        zoom: 'abc', // ignored
        mapStyle: 'abc',
        zoomControl: 'abc',
        scrollWheelZoom: 'abc',
        maxBounds: [2, 3, 4],
      },
      {
        delayRepaint: true,
        latitude: 0,
        longitude: 0,
        mapStyle: 'default',
        zoomControl: true,
        scrollWheelZoom: false,
      },
      5
    )
  );
});

describe('TransformParser._parseConfig', () => {
  function check(spec, expectedConfig, expectedSpec, warnCount) {
    return async () => {
      expectedSpec = expectedSpec || cloneDeep(spec);
      const vp = new TransformParser(spec);
      const config = await vp._parseConfig();
      expect(config).toEqual(expectedConfig);
      expect(vp.spec).toEqual(expectedSpec);
      expect(vp.warnings).toHaveLength(warnCount || 0);
    };
  }

  test('no config', check({}, {}, {}));
  test('simple config', check({ config: { a: 1 } }, {}));
  test('kibana config', check({ config: { kibana: { a: 1 } } }, { a: 1 }, { config: {} }));
  test('_hostConfig', check({ _hostConfig: { a: 1 } }, { a: 1 }, {}, 1));
});

describe('TransformParser._calcSizing', () => {
  function check(
    spec,
    useResize,
    paddingWidth,
    paddingHeight,
    isTransformLite,
    expectedSpec,
    warnCount
  ) {
    return async () => {
      expectedSpec = expectedSpec || cloneDeep(spec);
      const vp = new TransformParser(spec);
      vp.isTransformLite = !!isTransformLite;
      vp._calcSizing();
      expect(vp.useResize).toEqual(useResize);
      expect(vp.paddingWidth).toEqual(paddingWidth);
      expect(vp.paddingHeight).toEqual(paddingHeight);
      expect(vp.spec).toEqual(expectedSpec);
      expect(vp.warnings).toHaveLength(warnCount || 0);
    };
  }

  test('no size', check({ autosize: {} }, false, 0, 0));
  test('fit', check({ autosize: 'fit' }, true, 0, 0));
  test('fit obj', check({ autosize: { type: 'fit' } }, true, 0, 0));
  test('padding const', check({ autosize: 'fit', padding: 10 }, true, 20, 20));
  test(
    'padding obj',
    check({ autosize: 'fit', padding: { left: 5, bottom: 7, right: 6, top: 8 } }, true, 11, 15)
  );
  test(
    'width height',
    check({ autosize: 'fit', width: 1, height: 2 }, true, 0, 0, false, false, 1)
  );
  test(
    'VL width height',
    check({ autosize: 'fit', width: 1, height: 2 }, true, 0, 0, true, { autosize: 'fit' }, 0)
  );
});
