import { method } from '@wix/yoshi-flow-bm/serverless';
import { NodeWorkshopScalaApp } from '@wix/ambassador-node-workshop-scala-app/rpc';

const commentsService = NodeWorkshopScalaApp().CommentsService();

const fetch = method(async function (): Promise<any> {
  return commentsService(this.context.aspects).fetch('123');
});

export { fetch };
