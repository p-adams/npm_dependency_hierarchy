const packageJson = await Deno.readTextFile("package.json");

console.log(packageJson);
