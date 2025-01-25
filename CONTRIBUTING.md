This project is not open for contributions as it is a training project, but here is information for future me to remember:

- CI performs EAS Updates on push to master, which is fine for JS-only changes.
- Native changes should update the runtimeVersion in `eas.json`, and manually rebuild/publish after merge.
