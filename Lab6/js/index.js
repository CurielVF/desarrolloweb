let btnAgregar = $(".agregar");
let newItem = $("#newText");
let lista = $(".Lista")

btnAgregar.on("click", function (e) {
    e.preventDefault();
    if (newItem.val() === "") {
        alert("Ingrese un elemento.")
    }
    else {
        lista.append(`
        <div class="lis">
            <li>
                <p class="itemShop">
                    ${newItem.val()}
                </p>
                <button class="checar">check</button>
                <button class="del">delete</button>
            </li>
        </div>
        `
        )
    }
})

lista.on("click", ".checar", function () {
    $(this).parent().toggleClass('chec');
})

lista.on("click", ".del", function () {
    $(this).parent().parent().remove();
})