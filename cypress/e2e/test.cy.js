import {
  elements,
  forms,
  alertsWindows,
  widgets,
  interactions,
  bookStore,
} from "../fixtures/webelements.js";

describe("Demo QA - Elements", function () {
  beforeEach(function () {
    cy.visit(elements.url);
  });
  it("Text box", function () {});
  it("Check box", function () {});
  it("Radio button", function () {});
  it("Web tables", function () {});
  it("Buttons", function () {});
  it("Links", function () {});
  it("Broken links - Image", function () {});
  it("Upload and Download", function () {});
});

describe("Demo QA - Forms", function () {
  beforeEach(function () {
    cy.visit(forms.url);
  });
  it("Practice Form", function () {});
});

describe("Demo QA - Alert, Frame and Windows", function () {
  beforeEach(function () {
    cy.visit(alertsWindows.url);
  });
  it("Browser Windows", function () {});
  it("Alerts", function () {});
  it("Frames", function () {});
  it("Nested frames", function () {});
  it("Modal Dialogs", function () {});
});

describe("Demo QA - WIdgets", function () {
  beforeEach(function () {
    cy.visit(widgets.url);
  });
  it("Accordian", function () {});
  it("Auto Complete", function () {});
  it("Date Picker", function () {});
  it("Progress Bar", function () {});
  it("Tool Tips", function () {});
  it("Menu", function () {});
  it("Select Menu", function () {});
});

describe("Demo QA - Interactions", function () {
  beforeEach(function () {
    cy.visit(interactions.url);
  });
  it("Sortable", function () {});
  it("Selectable", function () {});
  it("Resizable", function () {});
  it("Droppable", function () {});
  it("Dragabble", function () {});
});

describe("Demo QA - Book Store Application", function () {
  beforeEach(function () {
    cy.visit(bookStore.url);
  });
  it("Login", function () {});
  it("Book Store", function () {});
  it("Profile", function () {});
  it("Book store API", function () {});
});
