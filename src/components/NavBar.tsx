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
            }} color="foreground" underline="hover">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#trampos")
            }} color="foreground" underline="hover">Trampos</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#sobre");
            }}  color="foreground" underline="hover">Sobre</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#equipe");
            }}  color="foreground" underline="hover">Equipe</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" onPress={() => {
              handleClick("#contato");
            }}  color="foreground" underline="hover">Contato</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </nav>
  )
}