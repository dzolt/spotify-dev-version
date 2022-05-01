import React from "react";
import styled from "styled-components";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 ">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>LogOut</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Playlists */}
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
        <p className="cursor-pointer hover:text-white">Playlists name..</p>
      </div>
    </div>
  );
}

const SidebarContainer = styled.div``;

const StyledHomeIcon = styled(HomeIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;

const StyledLibraryIcon = styled(LibraryIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;

const StyledPlusCircleIcon = styled(PlusCircleIcon)`
  width: 1.25rem;
  height: 1.25rem;
`;
