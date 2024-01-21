class Task {
    private String name;
    private String priority;
    private String category;

    public Task(String name, String priority) {
        this.name = name;
        this.priority = priority;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCategory() {
        return category;
    }
}

public class Main {
    public static void main(String[] args) {
        Task task1 = new Task("مهمة 1", "عاجلة");
        Task task2 = new Task("مهمة 2", "متوسطة");
        Task task3 = new Task("مهمة 3", "منخفضة");

        task1.setCategory("أولوية عالية");
        task2.setCategory("أولوية متوسطة");
        task3.setCategory("أولوية منخفضة");

        System.out.println(task1);
        System.out.println(task2);
        System.out.println(task3);
    }
}