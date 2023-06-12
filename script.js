const list =document.getElementById(`list`);


partners = [
    {
        completeName : `Wayne Barnett`,
        position : `Founder & CEO`,
        img : `wayne-barnett-founder-ceo.jpg`
    },
    {
        completeName : `Angela Caroll`,
        position : `Chief Editor`,
        img : `angela-caroll-chief-editor.jpg`
    },
    {
        completeName : `Walter Gordon`,
        position : `Office Manager`,
        img : `walter-gordon-office-manager.jpg`
    },
    {
        completeName : `Angela Lopez`,
        position : `Social Media Manager`,
        img : `angela-lopez-social-media-manager.jpg`
    },
    {
        completeName : `Scott Estrada`,
        position : `Developer`,
        img : `scott-estrada-developer.jpg`
    },
    {
        completeName : `Barbara Ramos`,
        position : `Graphic Designer`,
        img : `barbara-ramos-graphic-designer.jpg`
    }
]

let partnersList = ``;

for(let i = 0 ; i < partners.length ; i++){
    const partner = partners[i];
    console.table(partner);
    partnersList += `
    <li>
        <div> <img src="img/${partner.img}"></div>
        <div> ${partner.completeName}</div>
        <div> ${partner.position}</div>
    </li>`;
}

list.innerHTML = partnersList;