async function getDependenciesFromPackageJson(): Promise<{
  dependencies: { [name: string]: string };
  devDependencies: { [name: string]: string };
}> {
  const packageJson = await Deno.readTextFile("package.json");
  const { dependencies, devDependencies } = JSON.parse(packageJson);
  return {
    dependencies,
    devDependencies,
  };
}

const deps = await getDependenciesFromPackageJson();
console.log(deps);
