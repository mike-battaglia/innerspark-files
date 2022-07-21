var link = document.createElement( "link" );
link.href = "https://mike-battaglia.github.io/innerspark-files/community-style.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";

document.getElementsByTagName( "head" )[0].appendChild( link );

console.log("Community Style Loaded from Github.");
