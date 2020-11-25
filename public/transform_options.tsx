import React, { useCallback, useRef } from 'react';
// @ts-ignore EuiCodeEditor
import { EuiPanel, EuiCodeEditor } from '@elastic/eui';
import 'brace/theme/textmate';
import 'brace/mode/json';
import 'brace/mode/javascript';
import 'brace/mode/handlebars';
import 'brace/snippets/json';
import 'brace/snippets/javascript';
import 'brace/snippets/handlebars';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';

import ReactResizeDetector from 'react-resize-detector';
import { VisOptionsProps } from 'src/plugins/vis_default_editor/public';
///import { VisOptionsProps } from '../../../src/legacy/core_plugins/';
import { TransformVisParams, TransformVisParamsNames } from './types';

const mode: Record<string, string> = {
  multiquerydsl: 'json',
  meta: 'javascript',
  formula: 'handlebars',
};

function getTransformOptions(param: TransformVisParamsNames) {
  return function TransformOptions({ stateParams, setValue }: VisOptionsProps<TransformVisParams>) {
    const onChange = useCallback((value: any) => setValue(param, value), [setValue]);

    const codeEditor = useRef<EuiCodeEditor>(null);
    const onResize = useCallback(() => {
      const current = codeEditor.current;
      if (current !== null && current.aceEditor !== null) {
        current.aceEditor.editor.resize();
      }
    }, [codeEditor]);
    
    return (
      <EuiPanel paddingSize="s">
        <EuiCodeEditor
          ref={codeEditor}
          key={param}
          mode={mode[param]}
          theme="textmate"
          className="visEditor--transform__textarea"
          value={stateParams[param]}
          onChange={onChange}
          data-test-subj="transformCodeeditor"
          width="700px"
          height="500px"
          setOptions={{
            useSoftTabs: true,
            tabSize: 2,
            fontSize: '14px',
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
          }}
          //minLines={6}
        />
        <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
      </EuiPanel>
    );
  };
}

export { getTransformOptions };
