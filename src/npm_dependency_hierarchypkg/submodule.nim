

type
    Dependency = object
        package_name: string
        version_range: string


proc getNpmDependencies*(): int =
    let file = readFile("package.json")
    let dependencies: seq[Dependency] = @[]
    let dep = Dependency(package_name: "svelte", version_range: "^3.34.0")
    
    echo file
    result = 1

