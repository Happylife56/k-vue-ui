const getComponent = () => {
  const requireModules = require.context('../../packages/', true, /\.vue$/);
  const titleModules = require.context('../../packages/', true, /\.js$/);
  const listNames = [];
  titleModules.keys().forEach((key) => {
    const { pathName } = titleModules(key);
    if (pathName) listNames.push(pathName);
  });
  const routerList = [];
  requireModules.keys().forEach((key) => {
    const moduleName = key.replace(/(\.\/|.*\/|\.vue)/g, '');
    routerList.push({
      path: `/${moduleName}`,
      name: moduleName,
      component: requireModules(key).default,
    });
  });
  return { listNames, routerList };
};

export {
  getComponent,
};
