export interface FriendLink {
  name: string;
  url: string;
  avatar?: string;
  description?: string;
  tags?: string[];
  createdAt?: string; // 预留：加入时间
  priority?: number;  // 预留：排序权重
}

export const friends: FriendLink[] = [
  {
    name: "Astro 官方",
    url: "https://astro.build/",
    avatar: "https://astro.build/favicon.svg",
    description: "轻量快速的现代静态站点框架。",
    tags: ["framework"],
    priority: 10,
  },
];

export function getSortedFriends(list: FriendLink[] = friends) {
  return [...list].sort((a, b) => (b.priority || 0) - (a.priority || 0) || a.name.localeCompare(b.name, 'zh-CN'));
}
