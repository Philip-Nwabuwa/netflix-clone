"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOut } from "next-auth/react";

const UserNav = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
            <Avatar className="h-10 w-10 rounded-sm">
              <AvatarImage src="https://zmrldellfigiuuxbhncr.supabase.co/storage/v1/object/public/User%20Image/avatar.png" />
              <AvatarFallback className="rounded-sm">John</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
         <DropdownMenuLabel>
         <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John</p>
            <p className="text-xs leading-none text-muted-foreground">Philipnwabuwa@gmail.com</p>
          </div>
         </DropdownMenuLabel>
         <DropdownMenuSeparator/>
         <DropdownMenuItem onClick={() => signOut()}>
          Sign Out
         </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
