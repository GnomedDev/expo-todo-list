/// Stolen from https://blog.logrocket.com/data-fetching-react-suspense
export function wrapPromise<T>(promise: Promise<T>, errorVal?: T) {
  let response: T;
  let status = "pending";

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const suspendUntilLoaded = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        if (errorVal === undefined) {
          throw response;
        } else {
          return errorVal;
        }
      default:
        return response;
    }
  };

  return { suspendUntilLoaded: suspendUntilLoaded };
}
