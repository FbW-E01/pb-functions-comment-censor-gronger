function noBadLanguage () {
    let array1 = [
        "Dude, I finally did it - I managed to find a dagger of the Assassin",
        "This darn coffee tastes like hot garbage",
        "Suriname enable Plastic",
        "The Football Is Good For Training And Recreational Purposes",
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients It's awesome as FECK",
        "The Apollotech Assassin B340 is an affordable wireless Guylthyulg with reliable connectivity, 12 months battery life and modern design",
        "The Greater hell magic mushroom were-quylthulg jumps over the lazy dog",
      ]
    if (array1.includes("heck")) {
        "heck" = "h**k";
    } else if (array1.includes("feck")) {
        "feck" += "f*ck";
    } else if (array1.includes("darn")) {
        "darn" += "heckn'";
    } else if (array1.includes("assassin")) {
        "assassin" = "wooohooWoohooin";
    }
}

noBadLanguage(array1);