var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];
createPageElement();
$(document).ready(function () {
	var brandOption =[];
	var osOption =[];
	for (let index = 0; index < products.length; index++) {
		brandOption.push(products[index].brand);
		osOption.push(products[index].os);
	}
	brandOption = Array.from(new Set(brandOption));
	osOption = Array.from(new Set(osOption));
	console.log(brandOption,osOption);
	var bo = `<select name="" id="brands">
    <option value="">Select brand</option>`;
   for (let index = 0; index < brandOption.length; index++) {
	    bo +=`<option value="${brandOption[index]}">"${brandOption[index]}"</option>`;
   }
   bo += `</select>`;
   $("#brand").html(bo);
   var oso = `<select name="" id="brands">
    <option value="">Select OS</option>`;
   for (let index = 0; index < osOption.length; index++) {
	    oso +=`<option value="${osOption[index]}">"${osOption[index]}"</option>`;
   }
   oso += `</select>`;
   $("#os").html(oso);
  $("body").on("change", "#brand", function () {
    var brandSel = $("#brand").val();
	var filterBrand = [];
     for (let index = 0; index < products.length; index++) {
		 if(products[index].brand == brandSel)
		 filterBrand.push(products[index]);
	 }
    displayTable(filterBrand);
  });
  $("body").on("change", "#os", function () {
	var osSel = $("#os").val();
	console.log(osSel);
	var osBrand = [];
     for (let index = 0; index < products.length; index++) {
		 if(products[index].os == osSel)
		 osBrand.push(products[index]);
	 }
    displayTable(osBrand);
  });
  displayTable(products);
});
$("body").on("keyup", "#search", function () {
  var name_id = $(this).val().toLowerCase();
  //console.log(name_id);
  var prod = products.filter((v, i) => {
    return (
      v.name.toLowerCase().indexOf(name_id) !== -1 ||
      v.id.toLowerCase().indexOf(name_id) !== -1
    );
  });
  console.log(prod);
  if (name_id.length == 0) prod = products;
  displayTable(prod);
});
$("body").on("click", "#deleteBtn", function () {
  var pId = $(this).data("pid");
  console.log(pId);
  $(this).closest("tr").hide();
});
function displayTable(products) {
  var nm =
    "<table><thead><tr><th>ID</th><th>Name</th><th>BRAND</th><th>OS</th><th>Remove</th></tr></thead>\
	<tbody id ='tableBody'>";
  for (let i = 0; i < products.length; i++) {
    nm =
      nm +
      "<tr id = " +
      products[i].id +
      "><td>" +
      products[i].id +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      "</td><td><a href='#' data-pid=" +
      products[i].id +
      " id='deleteBtn'>X</a></td></tr>";
  }
  nm += "</tbody></table>";
  $("#table").html(nm);
}
function createPageElement() {
  var html =
    '<div class="header"><div id="filterdropdown"><select name="" id="brand"></select><select name="" id="os">\
	</select></div>\
	<div id="searchBar">\
	<label for="search">Search: <input type="text" id="search">\
	</label></div>\
	</div>';
  $("#wrapper").html(html);
} 
