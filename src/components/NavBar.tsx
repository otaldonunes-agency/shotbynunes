'use client'
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link
} from "@nextui-org/react";
import { LenisInstance, ScrollToParams, useLenis } from "@studio-freight/react-lenis";
import * as m from "@/paraglide/messages"

export const NavBar = () => {
  const lenisInstance: LenisInstance = useLenis();

  const handleClick = (targetElement: string | number | HTMLElement) => {
    if (targetElement) {
      const scrollToOptions: ScrollToParams = {
        offset: 0,
        lerp: 0.1,
        duration: 1.5,
        easing: (rawValue: number) => rawValue,
        immediate: false,
        lock: false,
        force: false,
      };

      lenisInstance.scrollTo(targetElement, scrollToOptions);
    }
  }

  return (
    <nav>
      <Navbar shouldHideOnScroll>
        <NavbarBrand>ShotbyNUNES</NavbarBrand>
        <NavbarContent className="">
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#home")
            }} color="foreground" underline="hover">{m.menuItemOne()}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#trampos")
            }} color="foreground" underline="hover">{m.menuItemTwo()}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#sobre");
            }}  color="foreground" underline="hover">{m.menuItemThree()}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#equipe");
            }}  color="foreground" underline="hover">{m.menuItemFour()}</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#contato");
            }}  color="foreground" underline="hover">{m.menuItemFive()}</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </nav>
  )
}