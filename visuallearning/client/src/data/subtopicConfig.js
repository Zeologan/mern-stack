export const subtopicConfig = {
  "css-box-model": {
    title: "CSS Box Model",
    description:
      "The CSS box model describes the rectangular boxes generated for elements.",
    buttons: ["content", "padding", "border", "margin"],
    styles: {
      content: {
        boxShadow: "inset 0 0 0 2px #94a3b8",
      },
      padding: {
        padding: "12px",
        background: "#dbeafe",
      },
      border: {
        border: "4px solid red",
      },
      margin: {
        margin: "20px",
        outline: "2px dashed orange"
      }
    }
  },

  "width-height": {
    title: "Width & Height",
    description:
      "The width and height properties set the size of an element.",
    buttons: ["width", "height"],
    styles: {
      width: {
        width: "300px",
        background: "#fffec8"
      },
      height: {
        height: "200px",
        background: "#f8ad9d"
      }
    }
  },

  "box-sizing": {
    title: "Box Sizing",
    description:
      "The box-sizing property defines how the width and height are calculated.",
    innerTexts: ["This div is bigger (width is also 300px and height is 100px).","This div is smaller (width is 300px and height is 100px)."],
    buttons: ["content-box", "border-box"],
    styles: {
      "content-box": {
        boxSizing: "content-box",
        padding: "20px",
        border: " 2px solid orange"
      },
      "border-box": {
        boxSizing: "border-box",
        border: " 2px solid blue"
      }
    }
  }
};
