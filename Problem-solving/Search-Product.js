const product = [
    { name: "Poco phone f1", price: 33000 },
    { name: "I phone 11", price: 75000 },
    { name: "HP Laptop", price: 53000 },
    { name: "Asus Laptop", price: 43000 },
    { name: "Bose Headphone", price: 21000 },
    { name: "Samsung Tv", price: 46000 },
    { name: "Sony Tv", price: 45000 },
    { name: "Xiaomi Smart Watch", price: 13000 },
    { name: "Go Pro Camera", price: 25000 },
]
function searchProducts(products, searchString) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchString) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = searchProducts(products, "Laptop");
console.log(matched);