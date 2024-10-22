"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import AddUserModal from "@/components/myComponents/AddUserModal";
import UserTable from "@/components/myComponents/UserTable";
import Sidebar from "@/components/templates/Sidebar";
import { trpc } from "@/server/client";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

type User = {
  name: string;
  age: number | string;
  city: string;
  email: string;
};

export default function Home() {
  const columns: { name: string }[] = [
    { name: "Name" },
    { name: "Email" },
    { name: "Age" },
    { name: "City" },
  ];
  const [addUserModalVisible, setAddUserModalVisible] =
    useState<boolean>(false);
  const users = trpc.users.getAll.useQuery();
  const addUser = trpc.users.add.useMutation({
    onSuccess: () => {
      users.refetch();
      setAddUserModalVisible(false);
    },
  });
  console.log(addUser);
  const onSubmit = (user: User) => {
    addUser.mutate({ ...user, age: +user.age });
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="container mx-auto px-6 py-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">Users</h2>
              <Button onClick={() => setAddUserModalVisible(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add User
              </Button>
            </div>

            {/* Search bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Search users..."
                  type="search"
                />
              </div>
            </div>

            {/* Users table */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <UserTable columns={columns} data={users.data ?? []} />
            </div>
          </div>
        </main>
      </div>
      <AddUserModal
        open={addUserModalVisible}
        setOpen={setAddUserModalVisible}
        onSubmit={onSubmit}
      />
    </>
  );
}
