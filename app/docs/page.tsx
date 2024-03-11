"use client"

import { title } from "@/components/primitives";
import { useSelector } from "react-redux";

export default function DocsPage() {
	const some = useSelector((state)=> state.switcher.value)
	return (
		<div>
			<h1 className={title()}>Docs {some.name}</h1>
		</div>
	);
}
