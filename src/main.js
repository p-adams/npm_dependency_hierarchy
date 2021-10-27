async function getDependenciesFromPackageJson() {
  const packageJson = await Deno.readTextFile("test-package.json");
  const { dependencies, devDependencies } = JSON.parse(packageJson);
  return {
    dependencies,
    devDependencies,
  };
}

const deps = await getDependenciesFromPackageJson();
Object.keys(deps.dependencies).map((deps) => {
  console.log(deps);
});
