import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Pengenalan Awal Produk",
  },
  {
    spacer: true,
  },
  {
    title: "Penjelasan Produk",
    href: "/markdown",
    heading: "Penjelasan Lanjutan",
    items: [
      {
        title: "Analisis Dan Desain Perangkat Lunak",
        href: "",
        items: [
          {
            title:"Analisis Kebutuhan",
            href:"",
            items:[
              {
                title:"Business Requirement",
                href:"/cards",
              },
              {
                title:"Stakeholder Requirement",
                href:"/filetree",
              },
              {
                title:"System Requirement",
                href:"/maths",
              },
              {
                title:"Software Requirement",
                href:"/tabs",
              },
            ]
          },
          {
            title:"Diagram",
            href:"",
            items:[
              {
                title:"Use Case Diagram",
                href:"/diagrams",
              },
              {
                title:"Class Diagram",
                href:"/lists",
              },
              {
                title:"Flowchart",
                href:"/notes",
              },
            ]
          },
          {
            title:"Metode SDLC",
            href:"",
            items:[
              {
                title:"Scrum",
                href:"/steps",
              },
            ]
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Dokumentasi Wireframe",
    href: "/structure",
    heading: "Dokumentasi",
    items: [
      {
        title: "Dokumentasi Sketsa",
        href: "/deep",
        items : [
          {
            title: "Dokumentasi Prototype",
            href: "/deeper",
          },
        ]
      },
    ],
  },
];