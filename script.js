/**
 * This file is part of the Obsidian Client Website
 * (in the following referred to as "this website").
 * Copyright (C) 2022  Alexander Richter
 * 
 * This website is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This website is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this website.  If not, see <https://www.gnu.org/licenses/>.
 */

window.onload = function() {

    const navbar = document.getElementsByClassName("navbar")[0];
    const navbarMenu = document.getElementsByClassName("navbar_menu")[0];
    const navbarMenuBtn = document.getElementsByClassName("navbar_menu_toggler")[0];

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.classList.add("navbarsticky");
        } else {
            navbar.classList.remove("navbarsticky");
        }
    };

    navbarMenuBtn.addEventListener("click", function() {
        navbarMenu.classList.toggle("active");
        navbarMenuBtn.classList.toggle("active");
    });

};