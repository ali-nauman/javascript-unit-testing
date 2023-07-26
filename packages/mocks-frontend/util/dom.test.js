import { describe, expect, it, vi } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";

import { showError } from "./dom";
import { beforeEach } from "vitest";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

describe("showError()", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocumentContent);
  });

  it("should add an error paragraph to the id=errors element", () => {
    showError("Test");

    const errorsElement = document.getElementById("errors");
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph).not.toBeNull();
  });

  it("should not contain an error paragraph initially", () => {
    const errorsElement = document.getElementById("errors");
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph).toBeNull();
  });

  it("should output the provided message in the error paragraph", () => {
    const testMessage = "Test";
    showError(testMessage);

    const errorsElement = document.getElementById("errors");
    const errorParagraph = errorsElement.firstElementChild;

    expect(errorParagraph.textContent).toBe(testMessage);
  });
});
