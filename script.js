
const participants=[
{ name:"Maya Cohen", org:"Ministry of Health", role:"Healthy Aging Programs Director", sector:"Health System", email:"maya@example.com"},
{ name:"Oren Levi", org:"Prime Minister's Office", role:"Strategic Policy Lead", sector:"Central Government", email:"oren@example.com"},
{ name:"Yael Ben‑David", org:"JDC Israel", role:"Program Partnerships Manager", sector:"Civil Society", email:"yael@example.com"},
{ name:"Eitan Mor", org:"Tel Aviv Municipality", role:"Community Innovation Manager", sector:"Local Government", email:"eitan@example.com"},
{ name:"Dr. Lior Shalev", org:"Hebrew University", role:"Gerontology Researcher", sector:"Academia & Research", email:"lior@example.com"},
{ name:"Rina Azulay", org:"National Insurance Institute", role:"Benefits Coordinator", sector:"Central Government", email:"rina@example.com"}
];

function renderParticipants(){
const grid=document.getElementById("participantsGrid");
const search=document.getElementById("searchInput").value.toLowerCase();
const sector=document.getElementById("sectorFilter").value;

grid.innerHTML="";

const filtered=participants.filter(p=>{
const matchesSearch=
p.name.toLowerCase().includes(search)||
p.org.toLowerCase().includes(search)||
p.role.toLowerCase().includes(search)||
p.email.toLowerCase().includes(search);

const matchesSector=sector==="all"||p.sector===sector;

return matchesSearch && matchesSector;
});

filtered.forEach(p=>{
const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<h3>${p.name}</h3>
<p>${p.org}</p>
<p>${p.role}</p>
<p>${p.email}</p>
<span class="badge">${p.sector}</span>
`;

grid.appendChild(card);
});
}

function showPage(page){
document.getElementById("participants-page").classList.add("hidden");
document.getElementById("about-page").classList.add("hidden");

document.getElementById(page+"-page").classList.remove("hidden");
}

renderParticipants();
