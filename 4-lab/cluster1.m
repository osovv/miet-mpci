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

data

% Построение 2D графика для первых двух признаков
figure(1);
gscatter(data(:,1), data(:,2));
title('2D распределение объектов');
xlabel('x1');
ylabel('x2');
grid on;

% Построение 3D графика
figure(2);
plot3(data(:, 1), data(:, 2), data(:, 3), 'o');
title('3D распределение объектов');
xlabel('x1');
ylabel('x2');
zlabel('x3');
grid on;
rotate3d on;

% Чёткая кластеризация данных (методом K средних)
[idx, centers] = kmeans(data, numClusters);

% 2D график с кластерами
figure(3);
gscatter(data(:,1), data(:,2), idx);
hold on;
plot(centers(:,1), centers(:,2), 'kx', 'MarkerSize', 12, 'LineWidth', 2);
title('2D кластеризация методом K-средних');
xlabel('x1');
ylabel('x2');
grid on;
hold off;

% 3D график с кластерами
figure(4);
scatter3(data(:,1), data(:,2), data(:,3), 36, idx, 'filled');
hold on;
scatter3(centers(:,1), centers(:,2), centers(:,3), 100, 'k', 'filled');
title('3D кластеризация методом K-средних');
xlabel('x1');
ylabel('x2');
zlabel('x3');
grid on;
rotate3d on;
hold off;

% FCM кластеризация
[centers, U, objFcn] = fcm(data, numClusters);

% Определение меток кластера для каждого объекта
[~, idx] = max(U);

% 2D график с кластерами FCM
figure(5);
cla;
gscatter(data(:,1), data(:,2), idx);
hold on;
plot(centers(:,1), centers(:,2), 'kx', 'MarkerSize', 12, 'LineWidth', 2);
title('2D кластеризация методом FCM');
xlabel('x1');
ylabel('x2');
grid on;
hold off;

% 3D график с кластерами FCM
figure(6);
scatter3(data(:,1), data(:,2), data(:,3), 36, idx, 'filled');
hold on;
scatter3(centers(:,1), centers(:,2), centers(:,3), 100, 'k', 'filled');
title('3D кластеризация методом FCM');
xlabel('x1');
ylabel('x2');
zlabel('x3');
grid on;
rotate3d on;
hold off;


maxIters = [50, 100, 150, 200, 250]; % Различные значения для максимального количества итераций
objFcnValues = []; % Массив для сохранения значений objFcn

for i = 1:length(maxIters)
    [~, ~, objFcn] = fcm(data, fcmOptions(NumClusters = numClusters, MaxNumIteration = maxIters(i)));
    objFcnValues(end+1) = objFcn(end); % Сохранение последнего значения objFcn
end

% Визуализация
figure(7);
plot(maxIters, objFcnValues, '-o');
title('Зависимость качества кластеризации от количества итераций');
xlabel('Количество итераций');
ylabel('Значение функции ошибки');