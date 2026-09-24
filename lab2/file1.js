import { writeFile, appendFile } from "fs/promises";

await writeFile("hello.txt", "JavaScript file is empty");

await appendFile("hello.txt", "\nJavaScript file is not empty");
