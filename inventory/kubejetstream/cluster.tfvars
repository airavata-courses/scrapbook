# your Kubernetes cluster name here
cluster_name = "kubejetstream"

# list of availability zones available in your OpenStack cluster
#az_list = ["nova"]

# SSH key to use for access to nodes
public_key_path = "~/.ssh/zonca-api-key.pub"

# image to use for bastion, masters, standalone etcd instances, and nodes
image = "JS-API-Featured-Ubuntu20-Latest"

# user on the node (ex. core on Container Linux, ubuntu on Ubuntu, etc.)
ssh_user = "ubuntu"

# 0|1 bastion nodes
number_of_bastions = 0

#flavor_bastion = "<UUID>"

# standalone etcds
number_of_etcd = 0

# masters
number_of_k8s_masters = 1

# Uncomment and set a previously created IP (or list) for the master nodes
# k8s_master_fips = ["149.0.0.0"]

number_of_k8s_masters_no_etcd = 0

number_of_k8s_masters_no_floating_ip = 0

number_of_k8s_masters_no_floating_ip_no_etcd = 0

flavor_k8s_master = "3"

# nodes
# for debugging purposes we can create nodes with floating ip
# in production better use nodes with no floating ip

number_of_k8s_nodes = 1

number_of_k8s_nodes_no_floating_ip = 0

#flavor_k8s_node = "<UUID>"

# GlusterFS
# either 0 or more than one
#number_of_gfs_nodes_no_floating_ip = 0
#gfs_volume_size_in_gb = 150
# Container Linux does not support GlusterFS
#image_gfs = "<image name>"
# May be different from other nodes
#ssh_user_gfs = "ubuntu"
#flavor_gfs_node = "<UUID>"

# networking
network_name = "kubespray-network"

# IU
external_net = "4367cd20-722f-4dc2-97e8-90d98c25f12e"
# TACC
# external_net = "865ff018-8894-40c2-99b7-d9f8701ddb0b"

# subnet_cidr = "<cidr>"

floatingip_pool = "public"

# list of availability zones available in your OpenStack cluster
# IU
az_list = ["zone-r6"]
az_list_node = ["zone-r6"]

bastion_allowed_remote_ips = ["0.0.0.0/0"]

# if you only access from a subset of IPs, set this accordingly for
# more security
k8s_allowed_remote_ips = ["0.0.0.0/0"]
