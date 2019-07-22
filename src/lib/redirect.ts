import { navigate } from "@reach/router";

export default (context: any, target: string) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    navigate(target);
  }
};
