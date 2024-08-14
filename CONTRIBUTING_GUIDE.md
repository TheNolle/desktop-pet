# First-Time Contributor Guide 🌱

Welcome to the **Desktop Pet** project! We're thrilled that you're interested in contributing. This guide is here to help you get started, whether you're new to open source or just new to this project.

## Getting Started

### 1. Fork the Repository

First, you'll need to fork the repository. This will create a copy of the project under your own GitHub account.

- Click the "Fork" button at the top right of this page.
- Once forked, you can clone the repository to your local machine.

```bash
git clone https://github.com/YOUR-USERNAME/desktop-pet.git
cd desktop-pet
```

### 2. Set Up Your Development Environment

Install the necessary dependencies using `pnpm` (recommended) or `npm`:
```bash
pnpm install
# or
npm install
```

### 3. Making Your First Change
- Check out a new branch for your changes:
```bash
git checkout -b my-first-contribution
```
- Make your changes, following the [Code Style Guidelines](CONTRIBUTING.md#code-style-guidelines).

### 4. Running the Project
Before submitting your changes, make sure everything works by running the project:
```bash
pnpm run start
# or
npm run start
```

### 5. Commit Your Changes
Once you're happy with your changes, commit them with a descriptive message:
```bash
git add .
git commit -m "Brief description of the changes"
```

### 6. Push and Create a Pull Request
- Push your changes to your forked repository:
```bash
git push origin my-first-contribution
```
- Go to the original repository and you'll see a prompt to create a pull request. Follow the instructions to submit your changes for review.

## Finding Issues to Work On
If you're looking for something to work on, check out the [issues](https://github.com/thenolle/desktop-pet/issues) page. Look for issues labeled as `good first issue` or `help wanted`.

## Asking for Help
If you have any questions or need help, feel free to ask:
- **Discord**: Join our [Discord server](https://discord.com/invite/Fp5vyeJCZF) to chat with other contributors.
- **GitHub Discussions**: Engage in discussions or ask questions on our GitHub Discussions page (if enabled).
- **GitHub Issues**: If you're stuck on a particular issue, feel free to ask for clarification on the issue itself.

## Tips for a Successful Contribution
- **Start small**: Don't feel like you need to tackle a big feature right away. Fixing a small bug or improving documentation is a great way to start.
- **Communicate**: If you're unsure about something, ask! It's better to clarify than to work on something that might not be needed.
- **Be patient**: Open source maintainers are often volunteers. It might take some time to get feedback on your pull request, but don't get discouraged.
