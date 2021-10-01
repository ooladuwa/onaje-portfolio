const Portfolio = (function () {
  function makeWords() {
    const words = [
      {
        text: "rapping",
        weight: 12.3,
      },
      {
        text: "css3",
        weight: 8,
      },
      {
        text: "javascript",
        weight: 14,
      },
      {
        text: "jquery",
        weight: 3,
      },
      {
        text: "programming",
        weight: 7,
      },
      {
        text: "python",
        weight: 10,
      },
      {
        text: "java",
        weight: 9,
      },
      {
        text: "qazi",
        weight: 15,
      },
      {
        text: "newText",
        weight: 7,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    const count = 1;
    $(window).on("scroll", function () {
      const y_scroll_pos = window.pageYOffset;
      const scroll_pos_test = 2700; // set to whatever you want it to be
      const words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  return {
    displayWordCloud: displayWordCloud,
  };
})();

Portfolio.displayWordCloud();
