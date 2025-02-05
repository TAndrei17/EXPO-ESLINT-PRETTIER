# Define package manager (default: Yarn)
PACKAGE_MANAGER = yarn

# Clean up old data
clean:
	@echo "Cleaning up old data..."
	rm -rf .git
	rm -rf node_modules
	rm -rf package-lock.json yarn.lock pnpm-lock.yaml
	@echo "Cleanup completed!"

# Install dependencies
install:
	@echo "Installing dependencies..."
	$(PACKAGE_MANAGER) install
	@echo "Installation completed!"

# Check for outdated packages
check-outdated:
	@echo "Checking for outdated packages..."
	$(PACKAGE_MANAGER) outdated

# Update dependencies to latest compatible versions
update-dependencies:
	@echo "Updating dependencies..."
	$(PACKAGE_MANAGER) upgrade

# Full setup: clean, install, update dependencies and check outdated
setup: clean install update-dependencies check-outdated
	@echo "Project is ready to use!"
	@echo "Run 'make start' to launch the project."

# Start Expo
start:
	@echo "Starting Expo..."
	$(PACKAGE_MANAGER) start
