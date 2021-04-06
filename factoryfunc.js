const Circle = (radius) => {
    return {
        radius,
        draw: () => {
            console.log("Factory funcion draw");
        }
    }
}

const circle1 = Circle(2)
circle1.draw()