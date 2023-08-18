import { Navbar } from './../Navbar/index';
export function Menu() {
  return (
    <>
      <Navbar.Root>
        <Navbar.Link link='/'>
          <Navbar.Placeholder text='Home' />
        </Navbar.Link>
        <Navbar.Link link='/Posts'>
          <Navbar.Placeholder text='Posts' />
        </Navbar.Link>
        <Navbar.Link link='Albuns'>
          <Navbar.Placeholder text='Albums' />
        </Navbar.Link>
      </Navbar.Root>
    </>
  );
}
