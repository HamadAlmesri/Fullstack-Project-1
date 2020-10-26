

 const renderCards = (filteredData , root) => 
filteredData.map((card) => {
    // Create Elemnets
    const widget = document.createElement("div");
    const widget__image = document.createElement("div");
    const img = document.createElement("img");
    const widget__desc = document.createElement("widget__desc");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    // Style the elements
    widget.className = "widget";
    widget__image.className = "widget__image";
    widget__desc.classList = "widget__desc";
    // Append Cilds  
    root.appendChild(widget);
    widget.appendChild(widget__image);
    widget.appendChild(widget__desc);
    widget__desc.appendChild(h4);
    widget__desc.appendChild(p);
    widget__image.appendChild(img);
     
    h4.innerHTML = card.name;
    p.innerHTML = card.city;
    img.src = card.img;
  });
  export default renderCards ;
