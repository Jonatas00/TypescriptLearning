//Type Alias
type uid = number | string

function logDetails(uid: uid, item: string) {
  console.log(`A Product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`);
}

logDetails(123, "sapato");
logDetails("123", "sapato")

logInfo(123, "Jonatas");
logInfo("123", "Jonatas");

type Platform = "Windows" | "Linux" | "Mac" | "Ios"

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform("Ios")


