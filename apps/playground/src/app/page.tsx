import { Button } from './components/ui/button'
import { Dropdown } from './components/ui/dropdown'
import { Input } from './components/ui/input'
import { NormalTime, RelativeTime } from './components/ui/time'
import { Tooltip } from './components/ui/tooltip'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-12 text-4xl font-bold text-black dark:text-zinc-50">
          Yume UI 组件展示
        </h1>

        {/* Button 组件 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Button 按钮
          </h2>
          <div className="space-y-6 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-500">变体 (Variants)</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-500">尺寸 (Sizes)</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-medium text-zinc-500">状态 (States)</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Input 组件 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Input 输入框
          </h2>
          <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700">
              <Input placeholder="请输入文本..." />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700">
              <Input type="email" placeholder="请输入邮箱..." />
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2 dark:border-zinc-700">
              <Input type="password" placeholder="请输入密码..." />
            </div>
          </div>
        </section>

        {/* Dropdown 组件 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Dropdown 下拉菜单
          </h2>
          <div className="flex flex-wrap gap-4 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <Dropdown.Root>
              <Dropdown.Trigger>
                <Button variant="outline">点击下拉菜单</Button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item>选项一</Dropdown.Item>
                <Dropdown.Item>选项二</Dropdown.Item>
                <Dropdown.Item>选项三</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>

            <Dropdown.Root mode="hover">
              <Dropdown.Trigger>
                <Button variant="outline">悬停下拉菜单</Button>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Item>悬停选项一</Dropdown.Item>
                <Dropdown.Item>悬停选项二</Dropdown.Item>
                <Dropdown.Item>悬停选项三</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Root>
          </div>
        </section>

        {/* Tooltip 组件 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Tooltip 提示
          </h2>
          <div className="flex flex-wrap gap-6 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline">上方提示</Button>
              </Tooltip.Trigger>
              <Tooltip.Content placement="top" className="px-3 py-2">
                这是上方的提示内容
              </Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline">下方提示</Button>
              </Tooltip.Trigger>
              <Tooltip.Content placement="bottom" className="px-3 py-2">
                这是下方的提示内容
              </Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline">左侧提示</Button>
              </Tooltip.Trigger>
              <Tooltip.Content placement="left" className="px-3 py-2">
                这是左侧的提示内容
              </Tooltip.Content>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger>
                <Button variant="outline">右侧提示</Button>
              </Tooltip.Trigger>
              <Tooltip.Content placement="right" className="px-3 py-2">
                这是右侧的提示内容
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </section>

        {/* Time 组件 */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-black dark:text-zinc-50">
            Time 时间
          </h2>
          <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-zinc-500">相对时间:</span>
              <RelativeTime date={new Date()} className="text-black dark:text-zinc-50" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-zinc-500">标准时间:</span>
              <NormalTime date={new Date()} className="text-black dark:text-zinc-50" />
            </div>
            <div className="flex items-center gap-4">
              <span className="w-24 text-sm text-zinc-500">过去时间:</span>
              <RelativeTime date="2024-01-01" className="text-black dark:text-zinc-50" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
