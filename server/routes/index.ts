
import { schema } from '@kbn/config-schema';
import { IRouter} from '../../../../src/core/server';

export function defineRoutes(router: IRouter) {
  router.get(
    {
      path: '/api/transform_vis/example',
      validate: false,
    },
    async (context, request, response) => {
      return response.ok({
        body: {
          time: new Date().toISOString(),
        },
      });
    }
  );
  router.get(
    {
      path: '/api/transform_vis/cluster/_health',
      validate: false,
    },
    async (context, request, response) => {
      const data = await context.core.elasticsearch.legacy.client.callAsCurrentUser('cluster.health')     
      //console.log('****************** ', data)
      return response.ok({
        body: {
          time: Object.keys(data.status)
        },
      });
    }
  ); 
  router.get(
    {
      path: '/api/transform_vis/cat/indices',
      validate: false,
    },
    async (context, request, response) => {
      const data = await context.core.elasticsearch.legacy.client.callAsCurrentUser('cat.indices')     
      //console.log('****************** ', data)
      return response.ok({
        body: {
          data: data,
          time: new Date().toISOString(),
        },
      });
    }
  ); 
  
        //Create a mapping for a selected index
  router.post(
      {
      path: '/api/transform_vis/{index}/_search',
      validate: {
        body: schema.any(),
        params: schema.any(),
        //query: schema.any()
        }
      },
      async (context, request, response) => {
      try {
        //console.log("bjacomy***************  ",request.params.index);
        //console.log("bjacomy***************  ",request.body);
        const data  = await await context.core.elasticsearch.legacy.client.callAsCurrentUser('search', {
          index: request.params.index,
          body: request.body.body
      });  
        //console.log('****************** ', data)
        return response.ok({
          body: {
            data,
            time: new Date().toISOString(),
          },
        });
      } catch (error) {
        console.log('****************** ', error);
        return response.ok({
          body: {            
            message: error
          }
        });
      }     
  });

  router.post(
    {
      path: '/api/transform_vis/create/indice/{index}',
      //validate: false
      validate: {
        //body: schema.any(),
        params: schema.any()
      }
    },
    
     
     async  (context, request, response) => {
     try {
        //console.log('******************  create indice',request);
        const data = await context.core.elasticsearch.legacy.client.callAsCurrentUser('indices.create',{index: request.params.index});    
        //console.log('****************** ', data)
        return response.ok({
          body: {
            data: data,
            time: new Date().toISOString(),
          },
        });
      } catch (error) {
        //console.log('****************** ', error);
        return response.ok({
          body: {            
            message: error,
          }
        });
      }
    }
  ); 

    //Create a mapping for a selected index
    router.post(
      {
      path: '/api/transform_vis/{index}/_mapping',
      validate: {
        body: schema.any(),
        params: schema.any()
        }
      },
      async (context, request, response) => {
        try {
          //console.log('******************  create indice mapping',request);
          const data = await context.core.elasticsearch.legacy.client.callAsCurrentUser('indices.putMapping',{index: request.params.index, body: {"properties":request.body.body}});    
          //console.log('****************** ', data)
          return response.ok({
            body: {
              data,
              time: new Date().toISOString(),
            },
          });
      } catch (error) {
        //console.log('****************** ', error);
        return response.ok({
          body: {            
            message: "error",
          }
        });
      }
  });

      //Create a mapping for a selected index
      router.post(
        {
        path: '/api/transform_vis/{index}/_bulk',
        validate: {
          body: schema.any(),
          params: schema.any(),
          query: schema.any()
          }
        },
        async (context, request, response) => {
        try {
          //console.log('******************  bulk indice',request);
          const pipeline = request.query.pipeline || false;
          const data  = await await context.core.elasticsearch.legacy.client.callAsCurrentUser('bulk', {
            ...(pipeline && { pipeline }),
            body: request.body
        });  
          //console.log('****************** ', data)
          return response.ok({
            body: {
              data,
              time: new Date().toISOString(),
            },
          });
        } catch (error) {
          //console.log('****************** ', error);
          return response.ok({
            body: {            
              message: error
            }
          });
        }
        
    });

    //checking index
    router.post(
      {
          path: '/api/transform_vis/{index}/_exists',
          validate: {
            params: schema.any(),
          }
      },
          async (context, request, response) => {
            try {
              const data = await context.core.elasticsearch.legacy.client.callAsCurrentUser('indices.get',{index: request.params.index});
              return response.ok({
                body: {
                  data: data,
                  time: new Date().toISOString(),
                },
              });
            } catch (error) {
              //console.log('****************** ', error);
              return response.ok({
                body: {            
                  message: error,
                }
              });
          }
      });
}
