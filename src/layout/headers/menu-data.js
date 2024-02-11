import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
   
    sub_menus:[
      { link: "/", title: "Home" }
      // { link: "/home-2", title: "Home 2" },
      // { link: "/home-3", title: "Home 3" }, 
    ] 
  
    
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "All Service" },
      { link: "/service-details", title: "Services Details" }, 
      { link: "/Web Design & Development", title: "Web Design & Development" }, 
      { link: "/Software & App Development", title: "Software & App Development" }, 
      { link: "/Digital Marketing & SEO ", title: "Digital Marketing & SEO" }, 
      { link: "/E-Commerce Solution", title: "E-Commerce Solution" }, 
      { link: "/Domain & Hosting", title: "Domain & Hosting" }, 
      { link: "/Graphic & UI/UX Design", title: "Graphic & UI/UX Design" }, 
    ],
  },
  
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Success" },
     { link: "/portfolio-details", title: "Success Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      // { link: "/404", title: "404" }, 
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" }, 
      { link: "/blog-details", title: "Blog Details" }, 
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
