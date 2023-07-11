docker start dockerdevenv-tododb-1

max_wait_time=60
container_status=""
elapsed_time=0
spinner_chars="/-\|"


while [ "$container_status" != "running" ] && [ $elapsed_time -lt $max_wait_time ]; do
    container_status=$(docker inspect -f '{{.State.Status}}' dockerdevenv-tododb-1 2>/dev/null)
    if [ "$container_status" != "running" ]; then
        printf "\rChecking container status: [%s]" "${spinner_chars:elapsed_time % ${#spinner_chars}:1}"
        sleep 1
        elapsed_time=$((elapsed_time + 1))
    fi
done

if [ "$container_status" == "running" ]; then
    echo "DB Container is running!"
else
    echo "DB Container did not start within the specified time."
fi



docker start dockerdevenv-todoapi-1

while [ "$container_status" != "running" ] && [ $elapsed_time -lt $max_wait_time ]; do
    container_status=$(docker inspect -f '{{.State.Status}}' dockerdevenv-todoapi-1 2>/dev/null)
    if [ "$container_status" != "running" ]; then
        printf "\rChecking container status: [%s]" "${spinner_chars:elapsed_time % ${#spinner_chars}:1}"
        sleep 1
        elapsed_time=$((elapsed_time + 1))
    fi
done

if [ "$container_status" == "running" ]; then
    echo "API Container is running!"
else
    echo "API Container did not start within the specified time."
fi

docker start dockerdevenv-todoui-1

while [ "$container_status" != "running" ] && [ $elapsed_time -lt $max_wait_time ]; do
    container_status=$(docker inspect -f '{{.State.Status}}' dockerdevenv-todoui-1 2>/dev/null)
    if [ "$container_status" != "running" ]; then
        printf "\rChecking container status: [%s]" "${spinner_chars:elapsed_time % ${#spinner_chars}:1}"
        sleep 1
        elapsed_time=$((elapsed_time + 1))
    fi
done

if [ "$container_status" == "running" ]; then
    echo "UI Container is running!"
else
    echo "UI Container did not start within the specified time."
fi
