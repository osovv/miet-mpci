% Параметры
N = 300; % Общее количество объектов
numClusters = 3; % Количество кластеров

% Параметры кластеров
means = [1 2 3; 5 6 7; 9 10 11]; % Средние значения для каждого кластера
covariance = eye(3); % Ковариационная матрица

% Генерация данных
data = [];
for i = 1:numClusters
    clusterData = mvnrnd(means(i,:), covariance, N/numClusters);
    data = [data; clusterData];
end

data = rand(300, 3); % 100 случайных трехмерных векторовв

data


% Создание сети Кохонена
dimensions = [3, 3]; % Размеры сетки Кохонена
net = selforgmap(dimensions);

% Конфигурация и обучение сети
net = configure(net, data');
net = train(net, data');

% Получение выходных весов (центров кластеров)
weights = net.IW{1,1};

% Классификация данных
classes = vec2ind(net(data'));

% Визуализация данных и центров кластеров с разными цветами
figure;
hold on;
colors = hsv(net.layers{1}.size(1)); % Создание цветовой карты
for i = 1:net.layers{1}.size(1)
    clusterData = data(classes == i, :);
    scatter3(clusterData(:, 1), clusterData(:, 2), clusterData(:, 3), 'filled', 'MarkerFaceColor', colors(i, :));
    scatter3(weights(i,1), weights(i,2), weights(i,3), 100, 'filled', 'MarkerFaceColor', colors(i, :));
end
title('Трехмерные данные и центры кластеров');
xlabel('x1');
ylabel('x2');
zlabel('x3');
legend('Исходные данные', 'Центры кластеров');
grid on;
rotate3d on;
hold off;
