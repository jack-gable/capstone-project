import React from "react";
import "../css/Nav.css";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	Show,
	useDisclosure,
} from "@chakra-ui/react";

function Nav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Show breakpoint="(min-width: 550px)">
				<nav className="nav">
					<NavLink className="navLink" to="/">
						Home
					</NavLink>
					<NavLink className="navLink" to="/about">
						About
					</NavLink>
					<NavLink className="navLink" to="/menu">
						Menu
					</NavLink>
					<NavLink className="navLink" to="/reservations">
						Reservations
					</NavLink>
					<NavLink className="navLink" to="/order">
						Order Online
					</NavLink>
					<NavLink className="navLink" to="/login">
						Login
					</NavLink>
				</nav>
			</Show>
			<Show breakpoint="(max-width: 550px)">
				<IconButton
					variant="unstyled"
					fontSize={20}
					icon={<FiMenu />}
					aria-label="mobile menu"
					onClick={onOpen}
				/>
				<Drawer
					isOpen={isOpen}
					placement="right"
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody>
							<nav className="mobileNav">
								<NavLink className="mobileLink" to="/">
									Home
								</NavLink>
								<NavLink className="mobileLink" to="/about">
									About
								</NavLink>
								<NavLink className="mobileLink" to="/menu">
									Menu
								</NavLink>
								<NavLink
									className="mobileLink"
									to="/reservations"
								>
									Reservations
								</NavLink>
								<NavLink className="mobileLink" to="/order">
									Order Online
								</NavLink>
								<NavLink className="mobileLink" to="/login">
									Login
								</NavLink>
							</nav>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</Show>
		</>
	);
}

export default Nav;
