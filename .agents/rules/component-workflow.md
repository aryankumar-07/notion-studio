# Component Discovery & 21st.dev First Rule

## Mandatory Workflow for UI & Frontend Projects
Whenever building or redesigning a web application, landing page, or UI interface:

1. **Active MCP Discovery from the Start**:
   - Before writing custom UI components from scratch, query the `21st` MCP server (`search`, `search_picker`).
   - Identify top-tier, award-winning community components (e.g., kinetic text reveals, interactive buttons, bento cards, particle systems, dock navigation, shaders).

2. **Pull & Adapt Workflow**:
   - Retrieve candidate components using `get_component({ id })`.
   - Adapt the source code into the project's design system, design tokens, framework version (e.g., React 19, Tailwind v4), and TypeScript types.
   - Blend pulled components with custom logic rather than reinventing common complex micro-interactions from zero.

3. **Maximized Visual Impact**:
   - Use the component catalog to introduce higher density of polished micro-interactions, spring physics, and tactile visual moments across the entire application.
