function customRender(reactElement,container)
{
    // const domElement = document.createElement(reactElement.type);

    // domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props)
    {
        if(prop ==='children') continue;

        domElement.setAttribute(prop,reactElement.props [prop])
    }

    container.appendChild(domElement);
}


const reactElement = {
    type :'a',
    props:{
        href :'https://youtu.be/nyuo9-OjNNg?si=jXeA9EEnQy0uLoAF',
        target:'_blank',
    },
    children:"Click for Youtube"
}


const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)