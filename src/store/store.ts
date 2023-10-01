import { create } from "zustand";
import { INodeProps } from "../types";

const NODES: Array<INodeProps> = [
  {
    id: "1",
    title: "Google",
    subtitle: "https://google.com",
    status: "on",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi at placeat cum dolorum fugiat explicabo incidunt adipisci pariatur nulla!"
  },
  {
    id: "2",
    title: "Test server 1",
    subtitle: "https://test-server-1.com",
    status: "off"
  },
  {
    id: "3",
    title: "Test server 2",
    subtitle: "https://test-server-2.com",
    status: "off",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi at placeat cum dolorum fugiat explicabo incidunt adipisci pariatur nulla!"
  },
  {
    id: "4",
    title: "Node",
    subtitle: "http://localhost:8080",
    status: "on",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque commodi at placeat cum dolorum fugiat explicabo incidunt adipisci pariatur nulla!"
  }
];

interface NodeState {
  nodes: INodeProps[];
}

const useNodeStore = create<NodeState>()(() => ({
  nodes: [...NODES]
}));

export default useNodeStore;
