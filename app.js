const yargs = require("yargs");
const Movie = require("./utils");

const app = (yargsObj) => {
    if (yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movie.list());
        //add movie to array, console loh at the end of runtime
      } else {
            console.log("Incorrent command")
        }
    }
};

app(yargs.argv);