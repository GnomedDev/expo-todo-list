export function initializeLibraries() {
  if (
    !new (class {
      x: undefined;
    })().hasOwnProperty("x")
  )
    throw new Error("Mobx transpiler is not configured correctly");
}
