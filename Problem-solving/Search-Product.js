const product = [
    { name: "Poco phone f1", price: 33000 },
    { name: "I phone 11", price: 75000 },
    { name: "HP Laptop", price: 53000 },
    { name: "Asus Laptop", price: 43000 },
    { name: "Bose Headphone", price: 21000 },
    { name: "Samsung TV", price: 44000 },
    { name: "Xiaomi Smart Watch", price: 13000 },
    { name: "Go Pro Camera", price: 25000 },
]
function searchProducts(products, searchString) {
    for (const product of products) {
        if (product.name.indexOf(searchString) != -1) {
 
        }
    }
}
const matched = searchProducts(products, "Laptop");
console.log(matched);