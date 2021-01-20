ansible-playbook --become -i inventory/$CLUSTER/hosts remove-node.yml -b -v --extra-vars "node=$1"
